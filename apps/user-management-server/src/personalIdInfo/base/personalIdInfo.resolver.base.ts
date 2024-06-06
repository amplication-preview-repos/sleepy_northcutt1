/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PersonalIdInfo } from "./PersonalIdInfo";
import { PersonalIdInfoCountArgs } from "./PersonalIdInfoCountArgs";
import { PersonalIdInfoFindManyArgs } from "./PersonalIdInfoFindManyArgs";
import { PersonalIdInfoFindUniqueArgs } from "./PersonalIdInfoFindUniqueArgs";
import { CreatePersonalIdInfoArgs } from "./CreatePersonalIdInfoArgs";
import { UpdatePersonalIdInfoArgs } from "./UpdatePersonalIdInfoArgs";
import { DeletePersonalIdInfoArgs } from "./DeletePersonalIdInfoArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { PersonalIdInfoService } from "../personalIdInfo.service";
@graphql.Resolver(() => PersonalIdInfo)
export class PersonalIdInfoResolverBase {
  constructor(protected readonly service: PersonalIdInfoService) {}

  async _personalIdInfosMeta(
    @graphql.Args() args: PersonalIdInfoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PersonalIdInfo])
  async personalIdInfos(
    @graphql.Args() args: PersonalIdInfoFindManyArgs
  ): Promise<PersonalIdInfo[]> {
    return this.service.personalIdInfos(args);
  }

  @graphql.Query(() => PersonalIdInfo, { nullable: true })
  async personalIdInfo(
    @graphql.Args() args: PersonalIdInfoFindUniqueArgs
  ): Promise<PersonalIdInfo | null> {
    const result = await this.service.personalIdInfo(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PersonalIdInfo)
  async createPersonalIdInfo(
    @graphql.Args() args: CreatePersonalIdInfoArgs
  ): Promise<PersonalIdInfo> {
    return await this.service.createPersonalIdInfo({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PersonalIdInfo)
  async updatePersonalIdInfo(
    @graphql.Args() args: UpdatePersonalIdInfoArgs
  ): Promise<PersonalIdInfo | null> {
    try {
      return await this.service.updatePersonalIdInfo({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PersonalIdInfo)
  async deletePersonalIdInfo(
    @graphql.Args() args: DeletePersonalIdInfoArgs
  ): Promise<PersonalIdInfo | null> {
    try {
      return await this.service.deletePersonalIdInfo(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User], { name: "users" })
  async findUsers(
    @graphql.Parent() parent: PersonalIdInfo,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
