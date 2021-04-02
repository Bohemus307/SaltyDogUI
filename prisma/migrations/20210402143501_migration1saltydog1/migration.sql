-- CreateTable
CREATE TABLE "sensors" (
    "sensor_id" SERIAL NOT NULL,
    "correlateid" VARCHAR(20) NOT NULL,
    "sensorname" VARCHAR(80) NOT NULL,
    "location" VARCHAR(25) NOT NULL,
    "unitofmeasure" VARCHAR(20) NOT NULL,

    PRIMARY KEY ("sensor_id")
);

-- CreateTable
CREATE TABLE "users" (
    "_id" SERIAL NOT NULL,
    "userid" VARCHAR(20) NOT NULL,
    "username" VARCHAR(80) NOT NULL,
    "employeeid" VARCHAR(15) NOT NULL,
    "email" VARCHAR(35) NOT NULL,
    "password" VARCHAR(10) NOT NULL,

    PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "values" (
    "_id" SERIAL NOT NULL,
    "correlateid" VARCHAR(20) NOT NULL,
    "time" TIMESTAMP(6) NOT NULL,
    "reading" DOUBLE PRECISION NOT NULL,
    "date" DATE NOT NULL,

    PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "alerts" (
    "_id" SERIAL NOT NULL,
    "sensor_id" VARCHAR(20) NOT NULL,
    "settingsid" VARCHAR(20) NOT NULL,
    "maxsetvalue" DOUBLE PRECISION NOT NULL,
    "minsetvalue" DOUBLE PRECISION NOT NULL,
    "dateset" DATE NOT NULL,

    PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sensors.correlateid_unique" ON "sensors"("correlateid");

-- CreateIndex
CREATE UNIQUE INDEX "sensors.sensorname_unique" ON "sensors"("sensorname");

-- CreateIndex
CREATE INDEX "idx_correlateid" ON "sensors"("correlateid");

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "alerts.sensor_id_unique" ON "alerts"("sensor_id");

-- AddForeignKey
ALTER TABLE "values" ADD FOREIGN KEY ("correlateid") REFERENCES "sensors"("correlateid") ON DELETE CASCADE ON UPDATE CASCADE;
