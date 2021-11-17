-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_id_fkey" FOREIGN KEY ("id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
