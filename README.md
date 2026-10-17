# Mjerenje paketa (APK)

Capacitor projekat koji pakuje www/index.html u Android aplikaciju.
APK se gradi besplatno na GitHubu, ne treba Android Studio.

## Koraci
1. Napravi prazan GitHub repozitorij (npr. mjerenje-paketa).
2. U ovom folderu:
   git init
   git add .
   git commit -m "prvi commit"
   git branch -M main
   git remote add origin https://github.com/TVOJE-IME/mjerenje-paketa.git
   git push -u origin main
3. Na GitHubu: Actions, Build APK, pa Run workflow (ili se pokrene sam nakon push).
4. Kad zavrsi (oko 5 do 8 min), otvori run i na dnu skini artifact "mjerenje-paketa-apk".
5. Raspakuj zip, prebaci app-debug.apk na telefon i instaliraj
   (dozvoli "instalaciju iz nepoznatih izvora").

## Izmjena aplikacije
Zamijeni www/index.html novom verzijom, pa git commit i push. Workflow izgradi novi APK.

## Napomena
Ovo je debug APK (za vlastitu upotrebu, nije za Google Play).
Naziv paketa mijenjas u capacitor.config.json (appId, appName).
