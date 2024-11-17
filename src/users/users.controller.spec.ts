import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

describe("UserController", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it("should call function findAll", async () => {
    jest.spyOn(usersService, "findAll").mockResolvedValue([]);

    usersService.findAll();

    console.log(usersService.findAll(), "FIND ALL");

    expect(usersService.findAll).toHaveBeenCalled();
  });

  it("should call function findOne", async () => {
    const id = "1234567";
    usersService.findOne(id);

    expect(usersService.findOne).toHaveBeenCalled();
  });

  it("should call function create", async () => {
    usersService.create({
      email: "milenamartim@live.com",
      name: "Milena Martim",
      password: "123467",
    });

    expect(usersService.create).toHaveBeenCalled();
  });

  it("should call function update", async () => {
    const id = "1234567";
    usersService.update(id, {
      email: "juniordias@gmail.com.br",
      name: "Alexandre",
    });

    expect(usersService.update).toHaveBeenCalled();
  });

  it("should call function remove", async () => {
    const id = "1234567";
    usersService.remove(id);

    expect(usersService.remove).toHaveBeenCalled();
  });
});
