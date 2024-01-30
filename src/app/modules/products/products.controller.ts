import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BasesController } from 'src/app/base/controllers';

@Controller('products')
export class ProductsController extends BasesController {
  constructor(private readonly productsService: ProductsService) {
    super();

    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  @Post()
  public async create(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto);
    try {
      const resp = await this.productsService.create(createProductDto);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get()
  public async findAll() {
    try {
      const resp = await this.productsService.findAll();

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Get(':id')
  public async findOne(@Param('id') id: string) {
    try {
      const resp = await this.productsService.findOne(id);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      const resp = await this.productsService.update(id, updateProductDto);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    try {
      const resp = await this.productsService.remove(id);

      return this.handleResponse(resp);
    } catch (error) {
      return this.handleError(error);
    }
  }
}
