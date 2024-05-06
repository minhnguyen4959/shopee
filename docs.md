1. Create new project
    yarn init -D
2. yarn install
3. Install and set up webpack
    yarn add webpack webpack-cli -D
    => setup scripts in package.json => "build": "webpack"



webpack
    -webpack.config.js: 
        + create file for config
        + when "build" it auto match name webpack (webpack.config js)
    -css + scss:
        + install: yarn add style-loader css-loader -D
        + install: yarn add sass sass-loader -D
        + tách riêng file css (không dùng cùng style-loader vì xung đột, chỉ dùng 1 trong 2)
            install: yarn add -D mini-css-extract-plugin
    - html webpack plugin:
        + auto generate dist(contain index.html + file js)
        + install: yarn add html-webpack-plugin -D
        + setup in webpack.config.js + scripts package.json
    - server
        + install: yarn add -D webpack-dev-server
        + running: yarn start
dist: Default, webpack use dist folder to contain files builded + use src/index.js to contain entry file of project (đầu vào tổng)

catching hash name file
    - After "build", in dist folder the name files (cố định)
    - Solution, each change code + building webpack, we create a new name file: output.name = [contenthash] 