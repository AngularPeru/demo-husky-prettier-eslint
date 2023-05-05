# Angular Community Perú

<div style="text-align: center;">
  <img  src="./src/assets/angular_community.png" alt="Texto alternativo de la imagen" width="400">
</div>

# Suscribete al Canal

## No olvides suscribirte al canal 🤖 [Angular Community Perú](https://www.youtube.com/@AngularCommunityPeru) y ver todo el video para que aprendas el porque usamos estas librerías.

# ¿Quieres más videos de Angular?

## Únete al canal de [Kevin Davila](https://www.youtube.com/@KevinDavilaDev) 🤗

## Únete al canal de [Jimy Dolores](https://www.youtube.com/@LogiDev) 🤗

## Tambien estamos en facebook como [Angular Community Perú](https://www.facebook.com/groups/angularcommunityperu)

# Demo Husky + Prettier + Eslint

## Migracion TSLint a ESLint Angular < v12

Recuerda que estos pasos solo aplica a las versiones que estan antes de la versión 12, ya que esas versiones usaban TSLint y generaban un archivo llamado **_tslint.json_**.

Ejecuta el siguiente comando en tu consola

```
ng add @angular-eslint/schematics
ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config
```

## Instalación EsLint Angular >= v12

Esta configuración solo aplica si usas angular versión 12 o superior.

```
ng add @angular-eslint/schematics
```

más información en: https://github.com/angular-eslint/angular-eslint

## Prettier

1. Prettier
2. eslint-config-prettier
3. eslint-plugin-prettier

Ejecuta el siguiente comando en tu consola

```
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

Luego dentro de tu archivo .eslinttrc.json agrega lo siguiente en la sección **extends** de las configuraciones para los archivos **.ts**
Configuración para los archivos TS:

```json
    		"extends": [
				"plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates",
                "plugin:prettier/recommended"
			]
```

Configuración para los archivos HTML:

```json
	"extends": [
		  "plugin:@angular-eslint/template/recommended",
      	  "plugin:prettier/recommended"
			],
```

**LISTADO DE REGLAS PARA TYPESCRIPT EN: https://typescript-eslint.io/rules/**

## Configurar archivos Prettier

Debes de crear los siguientes archivos en la raíz de tu proyecto:

1. .prettierrc
2. .prettierignore

dentro del archivo **.prettierrc** coloca lo siguiente:

```json
{
	"arrowParens": "always",
	"bracketSpacing": true,
	"insertPragma": false,
	"printWidth": 120,
	"proseWrap": "preserve",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"trailingComma": "none",
	"useTabs": true,
	"endOfLine": "auto"
}
```

Para evitar formatear algunos archivos podemos hacer uso del archivo **.prettierignore**, agrega lo siguiente:

```console
node_modules/*
package-lock.json
yarn.lock
src/*.ts
src/index.html
```

Recuerda que puedes configurar los atributos a tu gusto, más información en https://prettier.io/playground/

Dentro tu archivo **package.json** existe una sección llamada **scripts**, dentro agregaras lo siguiente:

```json
"format": "prettier --write \"./src/**/*.{ts,json,html,scss}\""
```

## Configurar Husky

Husky nos ayudara a verificar nuestros cambios de git, más información en:
https://typicode.github.io/husky/#/

Ejecuta el siguiente comando:

```console
npx husky-init && npm install
```

Esto creara una carpeta llamada **".husky"**, dentro de esta carpeta existe un archivo llamado **pre-commit**, dentro agregaras lo siguiente:

```console
npm run pre-commit
```

y luego agregaras los siguientes scripts en tu **package.json** en la sección de **scripts** :

```json
"lint-format": "npm run format &&  ng lint --fix",
"pre-commit": "npm run lint-format && git add ."
```

## Formatear solo los archivos modificados

Para poder formater unicamente los archivos modificados usaremos la librería **pretty-quick**

```console
npm i -D pretty-quick
```

Ahora debemos de modificar nuestro archivo **pre-commit** con lo siguiente:

```console
npx pretty-quick --pattern "src/**/**.ts" --pattern "src/**/**.json" --pattern "src/**/**.html"  --pattern "src/**/**.scss"  --staged --verbose && ng lint --fix
```
