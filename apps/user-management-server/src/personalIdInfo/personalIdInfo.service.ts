import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalIdInfoServiceBase } from "./base/personalIdInfo.service.base";

@Injectable()
export class PersonalIdInfoService extends PersonalIdInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
