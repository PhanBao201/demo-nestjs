import { Body, Controller, Post, Res } from "@nestjs/common";
import { CatCreateDto } from "src/dto/cat-create.dto";
import ResponseModel from "src/models";
import CatsService from "src/services";

@Controller('cats')
export class CatsController {
    constructor (private catsService: CatsService) {

    }

    @Post("create-cats")
    async Create (@Body() createCatDto: CatCreateDto) : Promise<ResponseModel> {
        this.catsService.create(createCatDto);
        const response = new ResponseModel();
        response.status = 200;
        response.data = createCatDto;
        return response;
    }
}