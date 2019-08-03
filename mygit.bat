
@ECHO OFF 
ECHO Start update on git with Heroku....
ECHO ===========Start==File Add===============
git add .
ECHO ===========Commit==File===============
for /F "tokens=2" %%i in ('date /t') do set mydate=%%i
set mytime=%time%
git commit -m %mydate%:%mytime% 
ECHO ===========push==File===============
git push
ECHO ===========pull==File===============
git pull
ECHO ===========push heroku==File===============
git push heroku
ECHO ===========Open Project===============
heroku open
PAUSE