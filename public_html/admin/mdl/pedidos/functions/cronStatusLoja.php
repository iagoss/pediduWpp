<?php

include '../../../lib/config.php';
include '../../../lib/functions.php';

$ex = $conn->query("SELECT time_ini, time_end, opened, time_manual FROM configurations")->fetch(PDO::FETCH_ASSOC);


$timeIni = json_decode($ex['time_ini'], true);
$timeEnd = json_decode($ex['time_end'], true);
$hoje = date('w') +1;
$agora = strtotime(date('H:i'));

if( is_array($timeIni[$hoje]) )
{
    if(
        ( $agora >= strtotime($timeIni[$hoje][0]) &&    //HORARIO DE AGORA FOR MAIOR QUE O HORÁRIO DE ABERTURA 1 (E)
        $agora <= strtotime( $timeEnd[$hoje][0] ) ) ||    //HORARIO ATUAL FOR MENOR QUE O HORARIO DE FECHAMENTO 1 (OU)
        ( $agora >= strtotime($timeIni[$hoje][1]) &&    //HORARIO DE AGORA FOR MAIOR QUE O HORÁRIO DE ABERTURA 2 (E)
        $agora <= strtotime($timeEnd[$hoje][1]) )       //HORARIO ATUAL FOR MENOR QUE O HORARIO DE FECHAMENTO 2
        ) 
        {
           $opened = 'yes'; 
        } 
        else
        {
            $opened =  'no';
        }
} 
else
{
    if( ( $agora >= strtotime($timeIni[$hoje]) && $agora <= strtotime($timeEnd[$hoje]) ) )
    {
        $opened = 'yes';
    }
    else
    {
        $opened = 'no';
    }
}

$timeManual = strtotime($ex['time_manual']);
if($timeManual > 0)
{
    if(time() <= strtotime(date('Y-m-d', $timeManual).' 23:59'))
    {
        $opened = $ex['opened'];
    }
    else
    {
        $update = $sqlActions->update('configurations', array('time_manual' => 0));
    }
}


if($opened != $ex['opened'])
{
    $update = $sqlActions->update('configurations', array('opened' => $opened));
}







?>