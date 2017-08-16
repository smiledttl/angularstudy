﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace myApp.Admin.Business.Models
{
    public class AlbumModel
    {
        public int AlbumId { get; set; }
        public int GenreId { get; set; }

        public string Genre { get; set; }
        public int ArtistId { get; set; }

        public string Artist { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string AlbumArtUrl { get; set; }
    }

    public partial class mySelectListItem
    {
        public int id { get; set; }

        public string name { get; set; }

        public string text { get; set; }
    }
}
