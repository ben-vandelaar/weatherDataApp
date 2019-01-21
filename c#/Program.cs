using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ConsoleDatReader
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] monthlyWeatherData = new string[100];
            string[,] daysOfTheMonth = new string[100, 100];
            //string[] cleanedArray = new string[1000];
            string[] splitDataArray = new string[100];


            StreamReader SR = new StreamReader("C:/Users/Benjamin/Desktop/C#/thetaTest/weather.dat");

            for (int i = 0; i < monthlyWeatherData.Length; i++)
            {
                monthlyWeatherData[i] = SR.ReadLine();
            };

            for (int i = 0; i < monthlyWeatherData.Length; i++)
            {
                

            }

            for (int x = 0; x < splitDataArray.Length; x++)
            {
                for (int y = 0; y < splitDataArray.Length; y++)
                {
                    daysOfTheMonth[y, x] = splitDataArray[x];
                }

            }


            // for (int x = 0; x < 10; x++)

            // {

            //     for (int y = 0; y < 10; y++)

            //     {

            //         Console.Write(daysOfTheMonth[x, y]);

            //     }
            //     Console.Write("\n");

            // }




            Console.ReadKey();

        }

    }
}