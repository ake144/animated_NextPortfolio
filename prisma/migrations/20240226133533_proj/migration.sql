-- CreateTable
CREATE TABLE "portfolio" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT,
    "link" TEXT,
    "desc" TEXT,
    "img" TEXT,
    "color" TEXT,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id")
);
