package com.spells;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface SpellRepository extends MongoRepository<Spell, String> {


    Spell findSpellByKey(String key);

    List<Spell> findSpellsByKeyStartsWith(String key);
}

