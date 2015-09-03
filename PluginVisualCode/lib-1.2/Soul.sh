#pragma lock<Core.spkg>;
// Alias
alias Stone = 0x001; 			// Камень
alias Air	= 0x002;			// Ветер
alias Fire  = 0x003; 			// Огнь
alias Auqa	= 0x004;			// Вода
// Действия
alias Infernum	  = 0xe10;  	// Действие: Воспламенения
alias Shear		  = 0xe11;  	// Действие: Сдвиг
alias Splitting	  = 0xe12;  	// Действие: Расщепление
alias Comperss    = 0xe13;  	// Действие: Сжатие
// Направления
alias Forward	  = 0x2f1;  	// Направление: Вперёд
alias Back		  = 0x2f2;  	// Направление: Назад
alias Left		  = 0x2f3;  	// Направление: Влево
alias Right		  = 0x2f4;  	// Направление: Вправо
alias Down		  = 0x2f5;  	// Направление: Вниз
alias Up		  = 0x2f6;  	// Направление: Вверх
//
abstract void Signal(int sigl); // Метод: Сообщает душе о сигнале (Выводит на UI)