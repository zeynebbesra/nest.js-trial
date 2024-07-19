import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService: NinjasService){}
// Ninja controllers

// GET /ninjas?type=fast-> []
@Get()
getninjas(@Query('weapon') weapon: 'stars' | 'nunchucks'){
    return this.ninjaService.getNinjas(weapon);
}
// GET /ninjas/:id -> {...}
@Get(':id')
getOneNinja(@Param('id', ParseIntPipe) id: number){
    return this.ninjaService.getOneNinja(id)
}

// POST /ninjas
@Post()
createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto)
}
// PUT /ninjas/:id
@Put(':id')
updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto)
}

// DELETE /ninjas/:id
@Delete(':id')
deleteNİnja(@Param('id') id: string){
    return this.ninjaService.removeNinja(+id)
        
}

}


// Ninja controllers
// GET /ninjas -> []
// GET /ninjas/:id -> {...}
// POST /ninjas 
// PUT /ninjas/:id
// DELETE /ninjas/:id