import { Module } from "@nestjs/common";
import { PersonalIdInfoModuleBase } from "./base/personalIdInfo.module.base";
import { PersonalIdInfoService } from "./personalIdInfo.service";
import { PersonalIdInfoController } from "./personalIdInfo.controller";
import { PersonalIdInfoResolver } from "./personalIdInfo.resolver";

@Module({
  imports: [PersonalIdInfoModuleBase],
  controllers: [PersonalIdInfoController],
  providers: [PersonalIdInfoService, PersonalIdInfoResolver],
  exports: [PersonalIdInfoService],
})
export class PersonalIdInfoModule {}
