FROM cypress/included:4.4.0
COPY . /e2e
WORKDIR /e2e







#docker run --shm-size=2g -e CYPRESS_VIDEO=false cypress-docker
# Pass --shm-size=2g while running the container to avoid out of memory errors
# https://stackoverflow.com/questions/56218242/headless-chromium-on-docker-fails
# docker run -it --shm-size=2g -v $PWD:/e2e -w /e2e -e CYPRESS_VIDEO=false --entrypoint=cypress cypress/included:4.4.0 run --spec "cypress/integration/examples/concept-4.js"
# docker run --shm-size=1g -e CYPRESS_VIDEO=false --entrypoint=cypress cypress-docker run --spec "cypress/integration/examples/concept-4.js"
#docker run -it --shm-size=2g -v $PWD:/e2e -w /e2e -e CYPRESS_VIDEO=true -e CYPRESS_RECORD_KEY=23d33bf3-ea97-4d72-a3db-9bf6c92576af --entrypoint=cypress cypress/included:4.4.0  run --record --spec cypress/integration/examples/test-framework-11.js  --env configFile=prod