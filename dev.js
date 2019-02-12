import path from 'path'

const src  = path.resolve(__dirname, 'public/src')
const dist = path.resolve(__dirname, 'public/js')

export default {
mode: 'development',

entry: src + '/act.jsx',
output: {
path: dist,
filename: 'act.js'
},

module: {
rules: [{
// test: /\.jsx$/,
exclude: /node_modules/,
loader: 'babel-loader'
}]
},

resolve: {
extensions: ['.js', '.jsx']
},
plugins: [  ]
}//def
