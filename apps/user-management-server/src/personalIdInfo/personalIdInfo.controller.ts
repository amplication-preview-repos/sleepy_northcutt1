import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonalIdInfoService } from "./personalIdInfo.service";
import { PersonalIdInfoControllerBase } from "./base/personalIdInfo.controller.base";

@swagger.ApiTags("personalIdInfos")
@common.Controller("personalIdInfos")
export class PersonalIdInfoController extends PersonalIdInfoControllerBase {
  constructor(protected readonly service: PersonalIdInfoService) {
    super(service);
  }
}
