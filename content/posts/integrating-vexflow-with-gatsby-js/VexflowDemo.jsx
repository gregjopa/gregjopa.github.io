import React, { useEffect } from "react";
import Vex from "vexflow";

function VexflowDemo(props) {
  const notesContainerRef = React.useRef(null);

  useEffect(() => {
    if (notesContainerRef.current !== null) {
      draw(notesContainerRef.current, props);
    }
  });

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div
        style={{ backgroundColor: "whitesmoke", display: "inline-block" }}
        ref={notesContainerRef}
      />
    </div>
  );
}

function draw(container, { width, height }) {
  const VF = Vex.Flow;
  const renderer = new VF.Renderer(container, VF.Renderer.Backends.SVG);

  renderer.resize(width, height);
  const context = renderer.getContext();
  context.setFont("Arial", 10, "");

  const stave = new VF.Stave(10, 40, width - 20);
  stave.addClef("percussion").addTimeSignature("4/4");
  stave.setBegBarType(VF.Barline.type.REPEAT_BEGIN);
  stave.setEndBarType(VF.Barline.type.REPEAT_END);
  stave.setContext(context).draw();

  const notes = [
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
    new VF.StaveNote({ clef: "percussion", keys: ["c/5"], duration: "16" }),
  ];

  notes[0].addModifier(new VF.Articulation("a>").setPosition(3));
  notes[4].addModifier(new VF.Articulation("a>").setPosition(3));
  notes[8].addModifier(new VF.Articulation("a>").setPosition(3));
  notes[12].addModifier(new VF.Articulation("a>").setPosition(3));

  var beams = VF.Beam.generateBeams(notes, { stem_direction: 1 });
  Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
  beams.forEach((b) => b.setContext(context).draw());
}

export default VexflowDemo;
