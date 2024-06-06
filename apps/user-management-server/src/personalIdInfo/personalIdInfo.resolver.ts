import * as graphql from "@nestjs/graphql";
import { PersonalIdInfoResolverBase } from "./base/personalIdInfo.resolver.base";
import { PersonalIdInfo } from "./base/PersonalIdInfo";
import { PersonalIdInfoService } from "./personalIdInfo.service";

@graphql.Resolver(() => PersonalIdInfo)
export class PersonalIdInfoResolver extends PersonalIdInfoResolverBase {
  constructor(protected readonly service: PersonalIdInfoService) {
    super(service);
  }
}
