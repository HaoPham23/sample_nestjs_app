import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
@Injectable()
export class AppService {
  private users: User[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
    },
  ];

  private records: Record[] = [
    {
      id: "1",
      userId: "1",
      amount: 100,
      description: "Groceries",
      createdAt: new Date("2022-01-01T10:00:00Z"),
    },
    {
      id: "2",
      userId: "1",
      amount: -50,
      description: "Dinner",
      createdAt: new Date("2022-01-01T20:00:00Z"),
    },
    {
      id: "3",
      userId: "2",
      amount: -30,
      description: "Movie tickets",
      createdAt: new Date("2022-01-02T15:00:00Z"),
    },
  ];

  private wallets: Wallet[] = [
    {
      id: "1",
      userId: "1",
      balance: 500,
    },
    {
      id: "2",
      userId: "2",
      balance: 1000,
    },
  ];

  getHello(): string {
    return "Hello World!";
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getAllRecords(): Record[] {
    return this.records;
  }

  getRecordById(id: string): Record {
    return this.records.find((record) => record.id === id);
  }

  createRecord(record: Record): void {
    this.records.push(record);
  }

  deleteRecord(id: string): void {
    this.records = this.records.filter((record) => record.id !== id);
  }

  getAllWallets(): Wallet[] {
    return this.wallets;
  }

  getWalletById(id: string): Wallet {
    return this.wallets.find((wallet) => wallet.id === id);
  }

  createWallet(wallet: Wallet): void {
    this.wallets.push(wallet);
  }

  deleteWallet(id: string): void {
    this.wallets = this.wallets.filter((wallet) => wallet.id !== id);
  }
}

export class Post {
  @ApiProperty()
  id: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;
}

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}

export class Record {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  description: string;
  createdAt: Date;
}

export class Wallet {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  balance: number;
}
