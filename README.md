# chomage
pour pas oublier de ce resinscrire car c'est relou

## Installation
*Il faut `node` et (`npm` ou `yarn`)*

```shell
# clone le repo
git clone https://github.com/kigiri/chomage.git

# va dans le dossier creer
cd chomage

# install les dependences

npm install # ou yarn

# copie la config de base
cp config-default.js config.js

# edite la config (voir configuration)

# executer automatiquement tout les 1er du mois
(crontab -l; echo '0 0 1 * *' $(which node) $(pwd)) | crontab -
```

## configuration
pour la config j'ai 2 trucs

### pole chomage
ya 3 infos, ton identifiant, ton password et ton code postal.

### free
notifications par SMS de free (ca marche que si t'a ton forfait chez free, mais bon, t'est au chomage, t'a ton forfait chez free)

Tu peu check dans tes [option](https://mobile.free.fr/moncompte/index.php?page=options) c'est tout en bas, *notification SMS*,
ca te donne un code (le `pass`) et c'est ton identifiant free a caller en `user`
