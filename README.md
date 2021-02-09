![system photo](./image/systemInfo.png)

# system-details
![npm](https://img.shields.io/npm/v/system-details?logo=NPM)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/shivam-chahar/system-details?logo=GitHub)
![GitHub all releases](https://img.shields.io/github/downloads/shivam-chahar/system-details/total?color=green&logo=GitHub)
![npm collaborators](https://img.shields.io/npm/collaborators/system-details?color=green&logo=NPM)
![GitHub top language](https://img.shields.io/github/languages/top/shivam-chahar/system-details?logo=github)
![GitHub issues](https://img.shields.io/github/issues/shivam-chahar/system-details?logo=github)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/Shivam-Chahar/system-details)


system-details is a npm package to show all important system information.

## Installation

Either through cloning with git or by using npm (the recommended way):

```bash
npm install -g system-details
```
And system-details will be installed globally to your system path.

You can also install system-details as a development dependency:

```bash
npm install --save-dev system-details
```
With a local installation, system-details will not be available in your system path and cannot be run simply with ` system-details ` command.

## Usage
If **system-details** is installed as global package, simply run it using:

```bash
system-details
```
If **system-details** is installed as a development dependency, run by calling it from within an npm script.

Edit `package.json` file:


```yaml
"scripts": {
  "system-details": "./node_modules/.bin/system-details"
}, 
/* rest of package.json */
``` 
Run using command:

```bash
npm run system-details
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
