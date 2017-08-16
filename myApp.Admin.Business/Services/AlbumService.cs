using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using myApp.Data;
using myApp.Admin.Business.Models;
namespace myApp.Admin.Business.Services
{
    public class AlbumService
    {
        public static List<AlbumModel> GetList(string title, int page, int pageSize, out int totalCount)
        {
            List<AlbumModel> result = new List<AlbumModel>();
            using(myAppModelContainer db =new myAppModelContainer())
            {
                var query = from a in db.albums
                            join g in db.genres on a.GenreId equals g.GenreId
                            join t in db.artists on a.ArtistId equals t.ArtistId
                            where a.Title.Contains(title)
                            select new AlbumModel
                            {
                                AlbumId=a.AlbumId,
                                GenreId=a.GenreId,
                                Genre=g.Name,
                                ArtistId=a.ArtistId,
                                Artist=t.Name,
                                Title=a.Title,
                                Price=a.Price,
                                AlbumArtUrl=a.AlbumArtUrl

                            };
                totalCount = query.Count();
                result = query.ToList().Skip((page-1)*pageSize).Take(pageSize).ToList();

            }

            return result;
        }
    }
}
