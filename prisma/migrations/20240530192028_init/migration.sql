-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "createat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateat" DATETIME NOT NULL
);
