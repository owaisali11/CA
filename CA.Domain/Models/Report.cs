﻿using CA.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CA.Models
{
    public class Report :  AccountBase
    {
        public string? Document { get; set; }
        public DateTime Date { get; set; }
        public string? Description { get; set; }
        public int UserId { get; set; }
    }
}
