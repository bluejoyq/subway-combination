-- CreateTable
CREATE TABLE "sandwich" (
    "sandwich_id" SERIAL NOT NULL,
    "sandwich_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "sandwich_pkey" PRIMARY KEY ("sandwich_id")
);

-- CreateTable
CREATE TABLE "sauce" (
    "sauce_id" SERIAL NOT NULL,
    "sauce_name" TEXT NOT NULL,

    CONSTRAINT "sauce_pkey" PRIMARY KEY ("sauce_id")
);

-- CreateTable
CREATE TABLE "sauceLike" (
    "like_id" SERIAL NOT NULL,
    "sauce_id" INTEGER NOT NULL,
    "user_uuid" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sauceLike_pkey" PRIMARY KEY ("like_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sauceLike_sauce_id_user_uuid_key" ON "sauceLike"("sauce_id", "user_uuid");

-- AddForeignKey
ALTER TABLE "sauceLike" ADD CONSTRAINT "sauceLike_sauce_id_fkey" FOREIGN KEY ("sauce_id") REFERENCES "sauce"("sauce_id") ON DELETE RESTRICT ON UPDATE CASCADE;
