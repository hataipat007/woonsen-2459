import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/entities/category.entity';

@Controller('Category')
export class CategoryController {
    constructor(private readonly service: CategoryService) {}
    @Get() 
    findAll(){
        return this.service.findAll();
    }

    @Post()
    create(@Body() body: Category) {
        return this.service.create(body);

    }

    @Get('user/:userid')
    findByUserId(@Body('userid') userid: string) {
        return this.service.findByUserId(userid);
    }
}
