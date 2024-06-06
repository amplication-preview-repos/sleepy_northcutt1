/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PersonalIdInfoWhereUniqueInput } from "./PersonalIdInfoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PersonalIdInfoUpdateInput } from "./PersonalIdInfoUpdateInput";

@ArgsType()
class UpdatePersonalIdInfoArgs {
  @ApiProperty({
    required: true,
    type: () => PersonalIdInfoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonalIdInfoWhereUniqueInput)
  @Field(() => PersonalIdInfoWhereUniqueInput, { nullable: false })
  where!: PersonalIdInfoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PersonalIdInfoUpdateInput,
  })
  @ValidateNested()
  @Type(() => PersonalIdInfoUpdateInput)
  @Field(() => PersonalIdInfoUpdateInput, { nullable: false })
  data!: PersonalIdInfoUpdateInput;
}

export { UpdatePersonalIdInfoArgs as UpdatePersonalIdInfoArgs };