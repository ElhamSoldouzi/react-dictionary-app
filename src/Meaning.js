import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);

  // Limit definitions to 4
  const limitedDefinitions = props.meaning.definitions.slice(0, 4);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {limitedDefinitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-card">
            <div className="definition">{definition.definition}</div>
            {definition.example && (
              <div className="example">
                <strong>Example:</strong>
                <em>{definition.example}</em>
              </div>
            )}
            {definition.synonyms && definition.synonyms.length > 0 && (
              <p>
                <strong>Synonyms:</strong>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
