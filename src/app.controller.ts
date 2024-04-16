import { Controller, Get, Post, Delete, Param, Body } from "@nestjs/common";
import { AppService, User, Record, Wallet } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("users")
  getAllUsers(): User[] {
    return this.appService.getAllUsers();
  }

  @Get("users/:id")
  getUserById(@Param("id") id: string): User {
    return this.appService.getUserById(id);
  }

  @Post("users")
  createUser(@Body() user: User): void {
    this.appService.createUser(user);
  }

  @Delete("users/:id")
  deleteUser(@Param("id") id: string): void {
    this.appService.deleteUser(id);
  }

  @Get("records")
  getAllRecords(): Record[] {
    return this.appService.getAllRecords();
  }

  @Get("records/:id")
  getRecordById(@Param("id") id: string): Record {
    return this.appService.getRecordById(id);
  }

  @Post("records")
  createRecord(@Body() record: Record): void {
    this.appService.createRecord(record);
  }

  @Delete("records/:id")
  deleteRecord(@Param("id") id: string): void {
    this.appService.deleteRecord(id);
  }

  @Get("wallets")
  getAllWallets(): Wallet[] {
    return this.appService.getAllWallets();
  }

  @Get("wallets/:id")
  getWalletById(@Param("id") id: string): Wallet {
    return this.appService.getWalletById(id);
  }

  @Post("wallets")
  createWallet(@Body() wallet: Wallet): void {
    this.appService.createWallet(wallet);
  }

  @Delete("wallets/:id")
  deleteWallet(@Param("id") id: string): void {
    this.appService.deleteWallet(id);
  }
}
