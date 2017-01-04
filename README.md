# chomage
pour pas oublier de ce resinscrire car c'est relou

On parle ici bel et bien de chomage et non pas de [Chonmage](https://fr.wikipedia.org/wiki/Chonmage).

Ce script ne vous aidera en rien pour faire votre coiffure japonaise traditionnelle.

![chonmage-image](https://raw.githubusercontent.com/kigiri/chomage/master/chonmage.jpg)


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

![free-configuration-image](https://raw.githubusercontent.com/kigiri/chomage/master/free-screenshot.png)

Tu peu check dans tes [option](https://mobile.free.fr/moncompte/index.php?page=options) c'est tout en bas, *notification SMS*,
ca te donne un code (le `pass`) et c'est ton identifiant free a caller en `user`
