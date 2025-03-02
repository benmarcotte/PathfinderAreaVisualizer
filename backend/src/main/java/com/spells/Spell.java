package com.spells;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("Spell")
public class Spell {
    
    @Id
    private String id;
    
    private String key;
    private String name;
    private Area area;
    private int value;
    
    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }
        
    public String getName() {
        return name;
    }
    
    public void setName(String nameString) {
        this.name = nameString;
    }
        
    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public Spell(String name, Area area, int value) {
        super();
        this.id = name;
        this.key = name.toLowerCase().replaceAll(" ", "");
        this.name = name;
        this.area = area;
        this.value = value;
    }

}
