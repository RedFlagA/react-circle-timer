module.exports = {
  // presets: [
  //   ['@babel/preset-env', {targets: {node: 'current'}}],
  //   ['@babel/preset-react', {targets: {node: 'current'}}] // add this
  // ]

    "plugins": [ "@babel/plugin-proposal-logical-assignment-operators" ],
    "presets": [
      [
        "babel-preset-gatsby",
        {
          "targets": {
            "browsers": [
              ">0.25%",
              "not dead"
            ]
          }
        }
      ]
    ]

}
