-- CreateTable
CREATE TABLE "Views" (
    "slug" TEXT NOT NULL,
    "view_count" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Views_pkey" PRIMARY KEY ("slug")
);
