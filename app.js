const heading=React.createElement("h1",{id:"heading" , xyz:"abc"},"Hello Joseph");
  
const parent=React.createElement("div",{id:"parent"},
  [
    React.createElement("div",{id:"child 1"},
      [React.createElement("h1",{},"Hi am from child1 h1 element"),
      React.createElement("h2",{},"Hi am from child1 h2 element")
    ]),
    React.createElement("div",{id:"child 2"},
      [React.createElement("h1",{},"Hi am from child2 h1 element"),
        React.createElement("h2",{},"Hi am from child2 h2 element")
      ]
  )
  ]
);
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);