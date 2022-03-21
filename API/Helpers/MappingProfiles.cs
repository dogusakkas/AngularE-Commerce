﻿using API.Core.DbModels;
using API.Dtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(x=>x.ProductBrand,y=>y.MapFrom(s=>s.ProductBrand.Name))
                .ForMember(x=>x.ProductType,y=>y.MapFrom(s=>s.ProductType.Name))
                .ForMember(x=>x.PictureUrl,y=>y.MapFrom<ProductUrlResolver>());
        }
    }
}
