/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Document as PrismaDocument,
  User as PrismaUser,
} from "@prisma/client";

export class DocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DocumentCountArgs, "select">): Promise<number> {
    return this.prisma.document.count(args);
  }

  async documents<T extends Prisma.DocumentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentFindManyArgs>
  ): Promise<PrismaDocument[]> {
    return this.prisma.document.findMany<Prisma.DocumentFindManyArgs>(args);
  }
  async document<T extends Prisma.DocumentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentFindUniqueArgs>
  ): Promise<PrismaDocument | null> {
    return this.prisma.document.findUnique(args);
  }
  async createDocument<T extends Prisma.DocumentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentCreateArgs>
  ): Promise<PrismaDocument> {
    return this.prisma.document.create<T>(args);
  }
  async updateDocument<T extends Prisma.DocumentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentUpdateArgs>
  ): Promise<PrismaDocument> {
    return this.prisma.document.update<T>(args);
  }
  async deleteDocument<T extends Prisma.DocumentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DocumentDeleteArgs>
  ): Promise<PrismaDocument> {
    return this.prisma.document.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.document
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
