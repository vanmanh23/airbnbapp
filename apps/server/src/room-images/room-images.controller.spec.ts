import { Test, TestingModule } from '@nestjs/testing';
import { RoomImagesController } from './room-images.controller';

describe('RoomImagesController', () => {
  let controller: RoomImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomImagesController],
    }).compile();

    controller = module.get<RoomImagesController>(RoomImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
