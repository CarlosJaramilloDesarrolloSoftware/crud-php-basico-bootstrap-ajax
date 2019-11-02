-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2019 a las 03:05:07
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

CREATE TABLE `autor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(75) NOT NULL,
  `apellido` varchar(75) NOT NULL,
  `genero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`id`, `nombre`, `apellido`, `genero`) VALUES
(4, 'Gabriel', 'Marquez', 'Masculino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro`
--

CREATE TABLE `libro` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `anio_edicion` int(4) NOT NULL,
  `paginas` smallint(4) NOT NULL,
  `editorial` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libro`
--

INSERT INTO `libro` (`id`, `nombre`, `autor`, `anio_edicion`, `paginas`, `editorial`) VALUES
(1, '100 AÃ±os de soledades', 'Gabriel Garcia Marquez', 1950, 200, 'Normal'),
(2, 'Florinda Meza', 'Ella', 1994, 50, 'Mx'),
(24, 'Nombre', 'dfsgdfg', 1788, 80, 'Normal'),
(25, 'Nombre real', 'Otro', 1950, 80, 'Esa'),
(26, 'Principito', 'An', 1990, 70, 'Norma'),
(27, 'El lobo', 'German', 1948, 300, 'Norma'),
(28, 'Libro 5', 'Autor 5', 1555, 50, 'Editorial 5'),
(29, 'Libro 6', 'Autor 6', 1666, 600, 'Editorial 6'),
(30, 'Libro 7', 'Autor 7', 1777, 70, 'Edi 7'),
(31, 'PAOLA URREGO', 'fsdg', 456, 546, 'dghf'),
(32, 'fghj', 'fgjf', 78, 77, 'uihjk'),
(33, 'El lobo Actulizado', 'German', 1948, 300, 'Norma'),
(34, 'fsgfdg', 'fdsgd', 54345, 345, 'dfgdg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autor`
--
ALTER TABLE `autor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libro`
--
ALTER TABLE `libro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autor`
--
ALTER TABLE `autor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `libro`
--
ALTER TABLE `libro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
