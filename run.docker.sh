set -x

docker build . -t nyayhelp_ui --platform linux/x86_64 
docker rm nyayhelp_ui
docker run --net=host -p 8080:8080 --name=nyayhelp_ui \