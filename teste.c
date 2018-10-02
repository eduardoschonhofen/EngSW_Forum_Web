#include <stdio.h>
#define LIN 3
#define COL 3
int main(){
int m[LIN][COL];
int i;
int j;
int aux;
int verificador;
int maior;
for(i=0;i<3;i++)
{
for(j=0;j<3;j++)
{
printf("digite um numero de 1 a 30:");
scanf("%d", &aux);
if(aux <1 || aux > 30)
{
verificador = 0;
while(verificador == 0)
{
printf("numero incorreto, entre de novo:");
scanf("%d", &aux);
if(aux> 0 && aux < 31)
verificador = 1;
}
}
m[i][j] = aux;
}
}
for(i = 0;i<3; i++)
{
for(j = 0;j<3; j++)
{
printf("%d ", m[i][j]);
}
printf("\n");
}
for(j = 0;j<3; j++)
{
  maior=0;
for(i = 0;i<3; i++)
{
if(m[i][j]>maior)
maior=m[i][j];
}
printf("%d:%d",j,maior);
printf("\n");
}
}
