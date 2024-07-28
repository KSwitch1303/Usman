import React, { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import './App.css'
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const [text, setText] = useState('');
  const { speak, voices } = useSpeechSynthesis();

  const handleOnClick = async () => {
    try {
      const selectedVoice = voices.find(voice => voice.lang.includes('it-IT'));
      speak({ text, voice: selectedVoice, rate: 1 });
    } catch (error) {
      console.error("Error translating text:", error);
    }
  }

  return (
    <div className="main">
      <Container className="container">
      <Segment className="segment">
        <h1>Text to Speech Converter</h1>
        <textarea className="textAreaStyle" onChange={(e) => { setText(e.target.value) }}></textarea>
        <button className="buttonStyle" onClick={() => { handleOnClick() }}>Listen</button>
      </Segment>
    </Container>
    </div>
  );
}

export default App;
