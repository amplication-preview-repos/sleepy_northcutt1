/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { AddressFindManyArgs } from "../../address/base/AddressFindManyArgs";
import { Address } from "../../address/base/Address";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: {
        ...data,

        institution: data.institution
          ? {
              connect: data.institution,
            }
          : undefined,

        personalIdInfo: data.personalIdInfo
          ? {
              connect: data.personalIdInfo,
            }
          : undefined,
      },
      select: {
        addressDetails: true,
        birthDate: true,
        createdAt: true,
        dateOfBirth: true,
        documentDetails: true,
        email: true,
        emailAddress: true,
        emailAddressOtp: true,
        emailOtp: true,
        firstName: true,
        gender: true,
        id: true,

        institution: {
          select: {
            id: true,
          },
        },

        lastName: true,
        mobilePhone: true,
        mobilePhoneNumber: true,
        otpExpires: true,
        otpExpiry: true,

        personalIdInfo: {
          select: {
            id: true,
          },
        },

        personalIdInformation: true,
        phoneOtp: true,
        relatedInstitution: true,
        roles: true,
        smsOtp: true,
        updatedAt: true,
        userCategory: true,
        username: true,
        userType: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        addressDetails: true,
        birthDate: true,
        createdAt: true,
        dateOfBirth: true,
        documentDetails: true,
        email: true,
        emailAddress: true,
        emailAddressOtp: true,
        emailOtp: true,
        firstName: true,
        gender: true,
        id: true,

        institution: {
          select: {
            id: true,
          },
        },

        lastName: true,
        mobilePhone: true,
        mobilePhoneNumber: true,
        otpExpires: true,
        otpExpiry: true,

        personalIdInfo: {
          select: {
            id: true,
          },
        },

        personalIdInformation: true,
        phoneOtp: true,
        relatedInstitution: true,
        roles: true,
        smsOtp: true,
        updatedAt: true,
        userCategory: true,
        username: true,
        userType: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        addressDetails: true,
        birthDate: true,
        createdAt: true,
        dateOfBirth: true,
        documentDetails: true,
        email: true,
        emailAddress: true,
        emailAddressOtp: true,
        emailOtp: true,
        firstName: true,
        gender: true,
        id: true,

        institution: {
          select: {
            id: true,
          },
        },

        lastName: true,
        mobilePhone: true,
        mobilePhoneNumber: true,
        otpExpires: true,
        otpExpiry: true,

        personalIdInfo: {
          select: {
            id: true,
          },
        },

        personalIdInformation: true,
        phoneOtp: true,
        relatedInstitution: true,
        roles: true,
        smsOtp: true,
        updatedAt: true,
        userCategory: true,
        username: true,
        userType: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: {
          ...data,

          institution: data.institution
            ? {
                connect: data.institution,
              }
            : undefined,

          personalIdInfo: data.personalIdInfo
            ? {
                connect: data.personalIdInfo,
              }
            : undefined,
        },
        select: {
          addressDetails: true,
          birthDate: true,
          createdAt: true,
          dateOfBirth: true,
          documentDetails: true,
          email: true,
          emailAddress: true,
          emailAddressOtp: true,
          emailOtp: true,
          firstName: true,
          gender: true,
          id: true,

          institution: {
            select: {
              id: true,
            },
          },

          lastName: true,
          mobilePhone: true,
          mobilePhoneNumber: true,
          otpExpires: true,
          otpExpiry: true,

          personalIdInfo: {
            select: {
              id: true,
            },
          },

          personalIdInformation: true,
          phoneOtp: true,
          relatedInstitution: true,
          roles: true,
          smsOtp: true,
          updatedAt: true,
          userCategory: true,
          username: true,
          userType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          addressDetails: true,
          birthDate: true,
          createdAt: true,
          dateOfBirth: true,
          documentDetails: true,
          email: true,
          emailAddress: true,
          emailAddressOtp: true,
          emailOtp: true,
          firstName: true,
          gender: true,
          id: true,

          institution: {
            select: {
              id: true,
            },
          },

          lastName: true,
          mobilePhone: true,
          mobilePhoneNumber: true,
          otpExpires: true,
          otpExpiry: true,

          personalIdInfo: {
            select: {
              id: true,
            },
          },

          personalIdInformation: true,
          phoneOtp: true,
          relatedInstitution: true,
          roles: true,
          smsOtp: true,
          updatedAt: true,
          userCategory: true,
          username: true,
          userType: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/addresses")
  @ApiNestedQuery(AddressFindManyArgs)
  async findAddresses(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Address[]> {
    const query = plainToClass(AddressFindManyArgs, request.query);
    const results = await this.service.findAddresses(params.id, {
      ...query,
      select: {
        addressLine1: true,
        addressType: true,
        city: true,
        country: true,
        createdAt: true,
        id: true,
        island: true,
        postalCode: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/addresses")
  async connectAddresses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/addresses")
  async updateAddresses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/addresses")
  async disconnectAddresses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  async findDocuments(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        createdAt: true,
        format: true,
        id: true,
        name: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  async connectDocuments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documents")
  async updateDocuments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documents")
  async disconnectDocuments(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}