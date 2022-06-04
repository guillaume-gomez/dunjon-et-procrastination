import React, { useState } from 'react';
import { sample } from "lodash";
import {
  PronoumColumn,
  ClassColumn,
  RaceColumn,
  CaracteristicsColumn,
  SpecialItemColumn,
  WithColumn
} from "../dictionnary";
import "./Generator.css";
import RandomWord from "./RandomWord";
import Button from "./Button";

function pickRandomItem(list: string[]) : string {
  return sample(list) as string;
}


function Generator() {
  const [words, setWords] = useState<string[]>(["Un", "Dinosaure", "necromancien", "sale", "avec", "un fleuret"]);


  function generate() {
    const newWords = [
      pickRandomItem(PronoumColumn),
      pickRandomItem(ClassColumn),
      pickRandomItem(RaceColumn),
      pickRandomItem(CaracteristicsColumn),
      pickRandomItem(WithColumn),
      pickRandomItem(SpecialItemColumn)
    ]
    setWords(newWords);
  }

  return (
    <div id="generator-container">
      <div id="words-container">
        {words.map((word, index) => <RandomWord key={index} word={word} />)}
      </div>
      <Button onClick={generate} />
    </div>
  );
}

export default Generator;
