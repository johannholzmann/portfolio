-- CreateTable
CREATE TABLE "views" (
    "ip" TEXT NOT NULL,
    "lastVisit" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "views" INTEGER NOT NULL DEFAULT 1
);

-- CreateIndex
CREATE UNIQUE INDEX "views_ip_key" ON "views"("ip");
