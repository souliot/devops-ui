rm -rf devops-ui.tar.gz
tar -czvf devops-ui.tar.gz devops-ui/
docker build -t devops-ui:5.1.2.0 .
