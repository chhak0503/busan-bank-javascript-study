/*
    날짜 : 2025/06/12
    이름 : 김철학
    내용 : 모듈 번들러 실습

    ///////////////////////////////////////////////////
    // webpack
    ///////////////////////////////////////////////////
    // 프로젝트 이동
    > cd ch04

    // webpack 설치
    > npm install --save-dev webpack webpack-cli

    ///////////////////////////////////////////////////
    // package.json (webpack 설치시 자동 생성) 수정
    ///////////////////////////////////////////////////
    
    {
        "name": "bundle",
        "version": "1.0.0",
        "scripts": {
            "build": "webpack"
        },
        "devDependencies": {
            "webpack": "^5.0.0",
            "webpack-cli": "^5.0.0"
        }
    }

    ///////////////////////////////////////////////////
    // webpack.config.js (수동 생성)
    ///////////////////////////////////////////////////
    
    
    const path = require('path');

    module.exports = {
    entry: './main3.js', // main.js가 진입점
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // 번들 결과물 위치
    },
    mode: 'development',
    devtool: 'source-map',
    };

    ///////////////////////////////////////////////////
    // 프로젝트 빌드
    ///////////////////////////////////////////////////
    
    > npm run build
*/

import { add, sub, mul, div } from "./modules/calc.js";

console.log(`add : ${add(1, 2)}`);
console.log(`sub : ${sub(1, 2)}`);
console.log(`mul : ${mul(2, 3)}`);
console.log(`div : ${div(4, 2)}`);
