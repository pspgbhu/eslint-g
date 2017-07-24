# eslint-generator
eslint config file generator. 主要是为了自己能够快速生成满足自身习惯的 eslint 配置文件，

## Install

```base
npm i -g eslint-g
```

## Usage

直接运行命令 `eslint-g` 等同于 `eslint-g -n` 就可以快速生成 .eslintrc.js 配置文件。

```base
esling-g
```

针对不同环境的配置

node 环境
```bash
eslint-g -n
```

react 环境
```bash
eslint-g -r
```

browser 通用配置
```bash
eslint-g -b
```
