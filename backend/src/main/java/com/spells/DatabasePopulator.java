package com.spells;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

//@SpringBootApplication
@EnableMongoRepositories
public class DatabasePopulator implements CommandLineRunner {

    @Autowired
    SpellRepository spellRepo;

    ArrayList<Spell> spellList = new ArrayList<Spell>();

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    
    @Override
    public void run(String... args) throws Exception {
        CreateSpellItems();
    }

    void CreateSpellItems(){
        System.out.println("starting data creation");
        String path = System.getProperty("user.dir") + "\\backend\\src\\main\\java\\com\\spells\\table-data.json";
        try {
            FileInputStream fileStream = new FileInputStream(path);
            ObjectMapper mapper = new ObjectMapper();
            List<SpellJson> spells = mapper.readValue(fileStream, new TypeReference<List<SpellJson>>(){});
            fileStream.close();
            ArrayList<Spell> filteredSpells = new ArrayList<Spell>();
            for (SpellJson spell : spells) {
                            
                String name = spell.name;
                Area area = null;
                int value = 0;
                try{
                    value = Integer.parseInt(spell.area.split("-")[0]);
                } catch (Exception e) {
                    continue;
                }

                switch (spell.area_type){
                    case "Cone":
                        area = Area.cone;
                        break;
                    case "Emanation":
                        area = Area.emanation;
                        break;
                    case "Line":
                        area = Area.line;
                        break;
                    case "Cylinder":
                        area = Area.burst;
                        break;
                    case "Burst":
                        area = Area.burst;
                        break;
                }

                if (area != null){
                    filteredSpells.add(new Spell(name, area, value));
                }
            }

            List<Spell> spellsUpdated = spellRepo.saveAll(filteredSpells);

            if(spellsUpdated != null){
                System.out.println("Succesfully updated " + spellsUpdated.size() + " spells.");
            }
            else if (filteredSpells != null) {
                System.out.println("No spells to update among " + filteredSpells.size() + " spells.");
            }

        } catch (IOException e) {
            System.out.println(e.toString());
            // System.out.println("Could not find file " + path);
        }
    }
}


class SpellJson {
    @JsonProperty
    public String name;
    @JsonProperty
    public String area_type;
    @JsonProperty
    public String area;
}
